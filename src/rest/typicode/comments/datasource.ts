import { Comment, Post } from "../../../generated/graphql";
import { DEFAULT_PARAMS, TypicodeAPI } from "../datasource";

export class CommentsAPI extends TypicodeAPI {
  async getComments({ ...args }) {
    const data = await this.get<Comment[]>("/comments", {
      params: {
        ...args,
      },
    });

    return data;
  }

  async getComment(id: string | number) {
    const data = await this.get<Comment>(`/comments/${id}`);

    return data;
  }

  async getPostComments(post: Post) {
    const data = await this.get<Comment[]>(`/post/${post.id}/comments`, {
      params: DEFAULT_PARAMS,
    });

    return data;
  }
}
