import Head from 'next/head'
import Link from 'next/link'

import Profile from '@/components/Profile'
import ProfileTab from '@/components/ProfileTab'

export default function Home() {
  return (
    <>
      <Head>
        <title>CDM Portfolio</title>
        <meta name="description" content="Codedamn profile for assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="p-2">
        <Profile />
        <ProfileTab />
      </div>
    </>
  )
}
