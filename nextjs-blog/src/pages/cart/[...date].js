import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  return <h1 className="title">CartDateSlug {JSON.stringify(date)}</h1>
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
