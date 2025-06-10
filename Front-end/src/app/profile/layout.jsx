import ProfileSideBar from '@/Components/Profile/ProfileSideBar'

export default function Layout({ children }) {
  return (
    <div className="container mt-[72px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-14 font-VazirMedium">
        <ProfileSideBar />

        <div className="w-full lg:col-span-2">{children}</div>
      </div>
    </div>
  )
}
