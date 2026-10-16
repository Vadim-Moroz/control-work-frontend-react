import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query,setQuery]=useSearchParams({page:'1'})
    return (
        <div className="PageButtons">
            <button onClick={()=>{
                const page = query.get('page')
                if(page){
                    let currentPage:number=+page;
                    currentPage++
                    setQuery({page:currentPage.toString()})
                }
            }}>next</button>
            <button onClick={()=>{
                const page = query.get('page')
                if(page&&+page>1){
                    let currentPage:number=+page;
                    currentPage--
                    setQuery({page:currentPage.toString()})
                }
            }}>prev</button>
        </div>
    );
};

export default PaginationComponent;