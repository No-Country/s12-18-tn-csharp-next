import React from "react";
import PostDetail from "@/components/post-detail";
import { POSTS } from "@/mocks/post-detail-page";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const post = POSTS.find((p) => p.id === params.id);

  // TODO: update
  if (!post) {
    return null;
  }

  return (
    <section className="min-h-screen">
      <PostDetail
        title={post.title}
        creator={post.creator}
        banner={post.banner}
        content={post.content}
        tags={post.tags}
        topDonators={post.topDonators}
        images={post.images}
      />
    </section>
  );
};

export default page;
