import InputError from '@/Components/InputError'
import Input from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head, useForm } from '@inertiajs/inertia-react'
import '../../../../css/input.css'
import Checkbox from '@/Components/Checkbox'
import PrimaryButton from '@/Components/PrimaryButton'

export default function Create({ auth }) {
  const { setData, post, processing, errors } = useForm({
    name: '',
    category: '',
    video_url: '',
    thumbnail: '',
    is_featured: false,
  })

  const onHandleChange = (event) => {
    setData(
      // Tidak hanya text tetapi juga file (foto)
      event.target.name,
      event.target.type === 'file' ? event.target.files[0] : event.target.value,
    )
  }

  const submit = (e) => {
    e.preventDefault()

    post(route('admin.dashboard.movie.store'))
  }

  return (
    <Authenticated auth={auth}>
      <Head title="Admin-Create Movie" />
      <h1 className="text-x1">Insert A New Movie</h1>
      <hr className="mb-4" />

      <form onSubmit={submit}>
        <InputLabel forInput="name" value="Name" />
        <Input
          type="text"
          name="name"
          variant="primary-outline"
          handleChange={onHandleChange}
          placeholder="Name Movie"
          isFocused={true}
        />
        <InputError message={errors.name} className="mt-2" />

        <InputLabel forInput="category" value="Category" className="mt-4" />
        <Input
          type="text"
          name="category"
          variant="primary-outline"
          handleChange={onHandleChange}
          placeholder="Category"
          isFocused={true}
        />
        <InputError message={errors.category} className="mt-2" />

        <InputLabel forInput="video_url" value="Video URL" className="mt-4" />
        <Input
          type="url"
          name="video_url"
          variant="primary-outline"
          handleChange={onHandleChange}
          placeholder="Video URL"
          isFocused={true}
        />
        <InputError message={errors.video_url} className="mt-2" />

        <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4" />
        <Input
          type="file"
          name="thumbnail"
          variant="primary-outline"
          handleChange={onHandleChange}
          placeholder="Insert Thumbnail MOvie"
          isFocused={true}
        />
        <InputError message={errors.thumbnail} className="mt-2" />

        <InputLabel forInput="rating" value="Rating" className="mt-4" />
        <Input
          type="number"
          name="rating"
          variant="primary-outline"
          handleChange={onHandleChange}
          placeholder="Rating Video"
          isFocused={true}
        />
        <InputError message={errors.rating} className="mt-2" />

        <div className="flex flex-row mt-4 items-center">
          <InputLabel
            forInput="is_featured"
            value="Is Featured"
            className="mt-1 mr-3 "
          />
          <Checkbox
            name="is_featured"
            handleChange={(e) => setData('is_featured', e.target.checked)}
          />
        </div>

        <PrimaryButton type="submit" className="mt-4" processing={processing}>
          Save
        </PrimaryButton>
      </form>
    </Authenticated>
  )
}
