// import React from "react";
// import { Artist } from "../types/schema";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { client } from "@/lib/sanity/client";
// import { urlForImage } from "@/lib/sanity/image";

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const artist = await client.fetch(`*[_type == "artist" && slug.current == $slug][0]`, { slug: params.slug });

//   if (!artist) {
//     return {
//       title: "Artist Not Found",
//       description: "The requested artist could not be found",
//     };
//   }

//   return {
//     title: artist.name["en"],
//     description: artist.description?.["en"] || "Artist profile",
//     openGraph: {
//       images: artist.imageCover?.asset._ref ? [urlForImage(artist.imageCover).url()] : undefined,
//     },
//   };
// }

// export default async function ArtistPage({ params }: { params: { slug: string } }) {
//   const artist = await client.fetch(`*[_type == "artist" && slug.current == $slug][0]`, { slug: params.slug });

//   if (!artist) {
//     notFound();
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Artist Header */}
//       <div className="mb-12">
//         {artist.imageCover && (
//           <div className="aspect-w-16 aspect-h-9 mb-6">
//             <img
//               src={urlForImage(artist.imageCover).url()}
//               alt={artist.name["en"]}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         )}
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           {artist.name["en"]}
//         </h1>
//         {artist.description && (
//           <div className="prose prose-lg max-w-none text-gray-600">
//             <div dangerouslySetInnerHTML={{ __html: artist.description["en"] }} />
//           </div>
//         )}
//       </div>

//       {/* Artist Content */}
//       <div className="space-y-8">
//         {artist.content?.map((block, index) => (
//           <div key={index} className="prose prose-lg max-w-none">
//             <div dangerouslySetInnerHTML={{ __html: block }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
