import Header from '../components/Header'
import Form from '../components/Form'
import Results from '../components/Results'
import InfoSection from '../components/InfoSection'
import AnimationSection from '../components/AnimationSection'
import InfoText from '../components/InfoText'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <>
   <Header />
   <Form />
   <Results />
   <InfoSection>
     <AnimationSection />
     <InfoText />
   </InfoSection>
   <Footer></Footer>
   </>
  )
}
