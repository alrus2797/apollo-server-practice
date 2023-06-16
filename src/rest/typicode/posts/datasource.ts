import { Comment, Post } from "../../../generated/graphql";
import { DEFAULT_PARAMS, TypicodeAPI } from "../datasource";

export class PostsAPI extends TypicodeAPI {
  async getPosts() {
    const data = await this.get<Post[]>("/posts", {
      params: DEFAULT_PARAMS,
    });
    return data;
  }

  async getPost(id: string) {
    const data = await this.get<Post>(`/posts/${id}`, {
      params: DEFAULT_PARAMS,
    });
    return data;
  }

  async getCommentPost(comment: Comment) {
    const data = await this.get<Post>(`/posts/${comment.id}`, {
      params: DEFAULT_PARAMS,
    });
    return data;
  }
}
