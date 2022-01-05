const MainContent=()=>{
    return(
        <div>testing</div>
    )

};

function Header() {
return (<h1>Header</h1>);
}


ReactDOM.render(
    <div><Header/><MainContent/></div>,
    document.getElementById("root")
)