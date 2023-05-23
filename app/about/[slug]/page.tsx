"use client"

export default function AboutDetails ({ params }: { params: { slug: string } }){
   
    console.log(params.slug, " this is params")
    return(
        <div>
           
            Hello page number {params?.slug}

        </div>
    )
}