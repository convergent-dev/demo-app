import { StarIcon } from '@/elements/StarIcon'

export function StarRating({ rating = 5 }) {
  return (
    <div
      data-conv="star-rating"
      className="flex gap-1">
      {[...Array(rating).keys()].map((index) => (
        <StarIcon key={index} className="h-5 w-5 fill-current" />
      ))}
    </div>
  )
}
