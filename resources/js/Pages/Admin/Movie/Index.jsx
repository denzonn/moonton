import FlashMessage from '@/Components/FlashMessage'
import PrimaryButton from '@/Components/PrimaryButton'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Link } from '@inertiajs/inertia-react'

export default function index({ auth, flashMessage }) {
  return (
    <Authenticated auth={auth}>
      <Link href={route('admin.dashboard.movie.create')}>
        <PrimaryButton type="button" className="w-40 mb-8">
          Insert Movie
        </PrimaryButton>
      </Link>
      {/* // Pengecekan */}
      {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
    </Authenticated>
  )
}
