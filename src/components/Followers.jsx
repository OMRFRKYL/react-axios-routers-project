import {useState} from 'react'
import Paginate from "./Paginate"
import CardFollowers from "./CardFollowers"
import loadingGif from "../assets/loading.gif"
import { Container,Row } from 'react-bootstrap'

const Followers = ({followers}) => {
  const {loading,followersList} =followers
  const [followersPerPage]=useState(12)
  const [page, setPage] = useState(1)

  const indexOfLastFollower = page * followersPerPage
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage
  const currentFollowers=followersList.slice(indexOfFirstFollower,indexOfLastFollower)
  const totalPages = Math.ceil(followersList.length/followersPerPage)


  return (
    <div>
      {
        loading ? 
        <div>
          <img src={loadingGif} alt="loading.."/>
        </div>
        :
        <div>
          <Container>
            <Row xs={2} md={3} lg={4}>
              {
                currentFollowers?.map((follower,index)=>(
                  <div key={index}>
                      <CardFollowers follower={follower}/>
                  </div>
                ))
              }
            </Row>
          </Container>
          <div>
          <Paginate pages ={totalPages} setPage={setPage}/>  
        </div>
      </div>
        
      }

    </div>
  )
}

export default Followers