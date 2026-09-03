import { Music } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card'
import { Button } from "../../../components/ui/button"
import SongsTable from './SongsTable';

export default function SongsTabContent() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Music className="size-5 text-emerald-500" />
              Songs Library
            </CardTitle>
            <CardDescription>Manage your music tracks</CardDescription>
          </div>
          <Button>
            +
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <SongsTable />
      </CardContent>
    </Card>
  )
}