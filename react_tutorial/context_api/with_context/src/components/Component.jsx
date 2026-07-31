import React,{useContext} from "react"


function Component() {
  const New=useContext(CounterContest)
  return (
    <>
    <div>iam anoter count</div>
    <div>
      {New}
    </div>
    </>
  )
}

export default Component