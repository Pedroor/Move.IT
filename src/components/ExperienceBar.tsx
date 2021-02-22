import '../styles/global.css'

export function ExperienceBar(){
    return(
        <header className="experience-bar"> 
            <span>0 xp</span>

            <div>
                <div style={{ width:'60%'}}/>

                <span className="current-experience" style={{ left:'50%'}}>
                    300xp
                </span>
            </div>
           
            <span>600xp</span>
        </header>
    )
}