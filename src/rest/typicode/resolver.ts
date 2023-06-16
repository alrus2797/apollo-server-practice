import {
  CommentResolvers,
  PostResolvers,
  UserResolvers,
} from "../../generated/graphql";

export const postResolver: PostResolvers = {
  comments: (post, args, { dataSources }) => {
    const data = dataSources.commentsAPI.getPostComments(post);
    return data;
  },
  user: (parent, args, { dataSources }) => {
    console.log("user post resolver", parent);
    const data = dataSources.usersAPI.getPostUser(parent);
    return data;
  },
};

export const userResolver: UserResolvers = {
  posts: ({ id }, args, { dataSources }) => {
    return dataSources.usersAPI.getUserPosts(id);
  },
};

export const commentResolver: CommentResolvers = {
  post: ({ postId }, args, { dataSources }) => {
    return dataSources.postsAPI.getPost(postId);
  },
};
