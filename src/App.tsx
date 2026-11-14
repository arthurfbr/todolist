import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import Icon from "./components/icon"

export default function App(){
  return (
  <div className="grid gap-3">
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá mundo!
      </Text>

      <Text className="text-green-base">
        Olá mundo!
      </Text>

      <Text variant="body-md-bold">
        Olá mundo!
      </Text>
      <Text>Levar o dog para passear</Text>

    </div>
      <div className="flex gap-1">
         <Icon svg={TrashIcon} className="fill-green-base" />
      </div>
  </div>
  );
}