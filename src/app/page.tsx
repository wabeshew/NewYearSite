import Image from 'next/image'
import { Progress, Button } from '@nextui-org/react'

import { basePath } from '../../next.config' // 追加
const BASE_PATH = basePath ? basePath : '' // 追加

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src={`${BASE_PATH}/vercel.svg`}
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
      <Button>Press me</Button>
      <Progress label='Loading...' value={55} className='max-w-md' />
    </main>
  )
}
