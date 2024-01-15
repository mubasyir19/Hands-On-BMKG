import { redirect } from 'next/navigation';

export default function User({ params }) {
  redirect(`/users/${params}`);
}
