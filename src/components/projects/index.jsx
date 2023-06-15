import "./projects.css"
export default function Projects() {
    const projects = {
        project: [
            {
                name: "404",
                link: "https://fascinating-naiad-efc2e8.netlify.app",
                code:"https://github.com/GenericJM/Error-404",
                image: "https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/628d666c02905d0008a5dc53/screenshot_2022-05-24-23-12-51-0000.png",
                tag: ["#html", "#css"]
            },
            {
                name: "edie home page",
                link: "https://venerable-tapioca-e7e1ce.netlify.app",
                code:"https://github.com/GenericJM/Edie-homepage",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6478df4e90934f000849ae29/screenshot_2023-06-01-18-11-36-0000.png",
                tag:["#html","#css"]
            },
            {
                name: "recipe master",
                link: "https://resilient-bunny-2375f0.netlify.app",
                code:"https://github.com/GenericJM/Recipe-page",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62b862388a18c347dfbbe161/screenshot_2022-06-26-13-42-26-0000.png",
                tag:["#html","#css"]
            },
            {
                name: "gallery",
                link: "https://genericjam-mygallery.netlify.app",
                code:"https://github.com/GenericJM/Gallery-DevChallenges",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62b789b6af135b464a7f544f/screenshot_2022-06-25-22-18-38-0000.png",
                tag:["#html","#css"]
            },
            {
                name: "interior consultant",
                link: "https://genericjam-interior-consultant.netlify.app",
                code:"https://github.com/GenericJM/Interior-Consultant",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62b1d0c677999b458206fe19/screenshot_2022-06-21-14-08-42-0000.png",
                tag:["#html","#css"]
            },
            {
                name: "My team Page",
                link: "https://sensational-sunshine-e2ac1e.netlify.app",
                code:"https://github.com/GenericJM/My-team-page",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/629a29e813ec430009fd75ce/screenshot_2022-06-03-15-34-07-0000.png",
                tag:["#html","#css"]
            },
            {
                name: "checkout Page",
                link: "https://gilded-brigadeiros-a1363b.netlify.app",
                code:"https://github.com/GenericJM/checkout-page-master",
                image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6468e62310c73b00088eed8b/screenshot_2023-05-20-15-24-31-0000.png",
                tag:["#html","#css","#javascript"]
            },
            

        ]

    }

    return (
        <>
            <h1>Projects ({projects.project.length})</h1>
            <section className="projects">

                {projects.project.map(x => {
                    return <article key={x.link} className="project__element">
                        

                        <img src={x.image} className="project__image"></img>
                        <div className="project__tag">{x.tag.map(tag => <a href="">{tag}</a>)}</div>
                        <h1>{x.name}</h1>
                        <div>
                            <button><a href={x.link} target="_blank">demo</a></button>
                            <button><a href={x.code} target="_blank">code</a></button>
                        </div>

                    </article>
                })}
            </section>

        </>

    )

}