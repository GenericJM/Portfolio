import PageButton from "../buttons/PageButtons"
import forward from "@/assets/svg/forward.svg"
import backward from "@/assets/svg/back.svg"
import { styles } from "../projects"
export default function ListOfPages({ setPage, page, lastPage, maxPages }) {
    const handleNextPage = () => { setPage(prevPage => prevPage + 1) }
    const handlePrevPage = () => { setPage(prevPage => prevPage - 1) }

    let pages = [];    
    let actualPage = page + 1;

    if (actualPage >= 3) {       
        pages.push(1);        
       if(actualPage>3) pages.push("...")       
        
    } 
    

    if(actualPage>1)pages.push(actualPage - 1)
    pages.push(actualPage)
    if(actualPage<maxPages)pages.push(actualPage+1)
    
    if ((maxPages-page) >= 3) { 
        if(actualPage<maxPages-2) pages.push("...")
        pages.push((maxPages));
    }    
    let i=0;

    return <section className="pageButtons">
        {page > 0 ?
            <PageButton action={handlePrevPage} image={backward} />
            :
            null
        }
        {pages.map(x =>{
           
            return <button
                className="nPage" key={i++}
                style={x === actualPage ? styles.buttonSelected : styles.button}
                onClick={() => { x != actualPage ? setPage(x - 1) : null }
            }> {x}</button>
           
        }
        )}

        {!lastPage ?
            <PageButton action={handleNextPage} image={forward} />
            :
            null

        }

    </section>
}
