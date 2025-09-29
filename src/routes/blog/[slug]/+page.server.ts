import { error } from '@sveltejs/kit'

const allowSlug = ['hello']

export const load = async ({ params }) => {

  if (!allowSlug.includes(params.slug)) {
    error(404, 'Not found')
  }

  return {
    slug: params.slug
  }
}
