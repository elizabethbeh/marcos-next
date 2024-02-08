
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="buscar" type="search" />
      <Button type="submit">Buscar</Button>
    </div>
  )
}
