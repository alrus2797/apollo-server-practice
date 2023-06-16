import { Post, User } from "../../../generated/graphql";
import { DEFAULT_PARAMS, TypicodeAPI } from "../datasource";

export class UsersAPI extends TypicodeAPI {
  async getUserPosts(userId: string) {
    const data = await this.get<Post[]>(`/user/${userId}/posts`, {
      params: DEFAULT_PARAMS,
    });

    return data;
  }

  async getUser(id: string) {
    const data = await this.get<User>(`/users/${id}`);
    return data;
  }

  async getPostUser(post: Post) {
    return this.getUser(post.userId);
  }
}
