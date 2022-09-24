import { Link } from '@inertiajs/inertia-react'
import '../../../css/sidebar.css'

export default function MenuItem({
  link,
  icon,
  text,
  isActive,
  method = 'get',
}) {
  return (
    <Link
      href={link ? route(link) : null}
      className={`side-link mt-5 ${isActive && 'active'}`}
      method={method}
      as="button"
    >
      {icon}
      {text}
    </Link>
  )
}
