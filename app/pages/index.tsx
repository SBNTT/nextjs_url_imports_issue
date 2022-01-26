import {GetStaticProps, NextPage} from 'next'
// @ts-ignore
import {MODULE_NAME} from 'http://localhost:3001/index.js'

type HomePageProps = {
    randomNumber: number
}

const HomePage: NextPage<HomePageProps> = ({randomNumber}) => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>{MODULE_NAME}</h2>
            <h3>{randomNumber}</h3>
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    return {
        props: {
            randomNumber: Math.random()
        },
        revalidate: 15
    }
}

export default HomePage
