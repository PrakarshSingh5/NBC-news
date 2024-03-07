import Left from "./Left"
import Right from "./Right"
type newsProp={
  news:any
}

const Home = (props:newsProp) => {
  return (
    <div className="flex pl-12">
      <Left news={props?.news}/>
      <Right news={props?.news}/>
    </div>
  )
}

export default Home
