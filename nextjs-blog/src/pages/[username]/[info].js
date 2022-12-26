import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useEffect, useState } from 'react'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')
  const [age, setAge] = useState('?')

  useEffect(() => {
    if (uid === null) return
    fetch(`/api/user-info/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name)
        setAge(data.age)
      })
  })

  return (
    <>
      <h1 className="title">
        {username}'s {info}
      </h1>
      <h1 className="title">Name: {name}</h1>
      <h1 className="title">Age: {age}</h1>
      <h1 className="title">uid: {uid}</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
