import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className='flex'>
        <Link href='/'>
          <img className='h-10 w-10 object-contain cursor-pointer rounded-full' src="https://sun9-51.userapi.com/impg/F3S_dgR_n0aaaDgiF1p9e-v4IM0fuDxMDF3Vuw/wdCigfAfXdg.jpg?size=1378x1378&quality=95&sign=ad7ab1db22201de4acafd1eb48013150&type=album" alt="" />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
          <h3>О нас</h3>
          <h3>Контакты</h3>
          <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Подписаться</h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Войти</h3>
        <h3 className='border px-4 py-1 rounded-full border-green-600'>Зарегестрироваться</h3>
      </div>
    </header>
  )
}

export default Header