const { PostRepositoryPort } = require("@/ports/database/post-repository");
const { HttpFrameworkPort } = require("@/ports/http-framework");
const { validateReceivedPublication } = require("../helpers");
const { CreateAPostDTO } = require("./dto");

const createAPostUseCase =
  (postRepository = PostRepositoryPort, { ok } = HttpFrameworkPort) =>
  async ({ payload = CreateAPostDTO }) => {
    validateReceivedPublication(payload);
    const createdPost = await postRepository.create(payload);
    return ok(createdPost);
  };

module.exports = createAPostUseCase;
