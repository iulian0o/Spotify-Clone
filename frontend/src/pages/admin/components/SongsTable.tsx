import { useMusicStore } from './../../../stores/useMusicStore';

export default function SongsTable() {
  const { songs, isLoading, error } = useMusicStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-between py-8">
        <div className="text-zinc-400">Loading songs...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-between py-8">
        <div className="text-red-400">{error}</div>
      </div>
    )
  }

  return (
    <div>SongsTable</div>
  )
}