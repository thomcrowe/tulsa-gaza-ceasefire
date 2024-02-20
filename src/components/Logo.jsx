import Image from 'next/image'
import logo from '@/images/logos/gaza-logo.png'

export function Logo(props) {
  return (
    <Image src={logo}  className="max-w-xs max-h-16 object-contain" alt="Microsoft Azure User Group Poland" unoptimized />
  )
}
