const { Job } = require("../model/index");

exports.getJob = async () => {
  try {
    const result = await Job.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createJob = async (body) => {
  try {
    const result = await Job.create({ ...body });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateJob = async (body) => {
  try {
    const { id, title, salary, address } = body;
    const job = await Job.findByPk(id);
    job.title = title;
    job.salary = salary;
    job.address = address;
    await job.save();
    return job;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteJob = async (jobId) => {
  try {
    const result = await Job.destroy({ where: { id: jobId } });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
