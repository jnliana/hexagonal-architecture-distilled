const { PostRepositoryPort } = require("@/ports/database");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { getSpecificPostDTO } = require("./dto");

const getSpecificPostUseCase = async (
  { payload = getSpecificPostDTO },
  postRepository = PostRepositoryPort,
  { badRequest, ok } = HttpFrameworkPort
) => {
  validateReceivedPublication(payload);
};

module.exports = getSpecificPostUseCase;