
import Blogs from '../blogs/Blogs'
import Partners from '../partners/Partners'
import Counter from '../counter/Counter'
import Newsletter from '../newsletter/Newsletter'
import Homeabout from '../about/Homeabout'
import Calltoaction from '../calltoaction/Calltoaction'
const Home = () => {
    return (
        <>
            <Homeabout/>
            <Blogs/>
            <Partners/>
            <Counter/>
            <Calltoaction/>
            <Newsletter/>
        </>
    )
}

export default Home