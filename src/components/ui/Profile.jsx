
import { Avatar } from "flowbite-react";

export function Profile() {
  return (
    <Avatar size="lg" img="https://r11.es/assets/profile.jpeg" rounded>
      <div className="space-y-1 font-medium text-start">
        <div className="text-primary-gray">Elías Osorio</div>
        <div className="text-sm text-primary-dark">Desarrollador Web</div>
      </div>
    </Avatar>
  );
}
