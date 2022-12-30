import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";

export const revalidate = 60;
const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

export default async function HomePage() {

    if (previewData()) {
        return (
            <PreviewSuspense 
                fallback={(
                    <div role="status">
                        <p className="text-center text-xl animate-pulse text-[#f7ab0a]">
                            Loading Preview Data...
                        </p>
                    </div>
                )}
            >
                {/* <PreviewBlogList /> */}
            </PreviewSuspense>
        )
    }

    const posts = await client.fetch(query);
    console.log(posts);
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl">
                Helena Blog
            </h1>
        </div>
    )
}