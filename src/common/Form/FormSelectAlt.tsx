import { ActionSheetButton } from "@/app/components/Feed/ActionSheetButton";
import { FormItem } from "@/common/Form/FormItem";
import { Text } from "@/common/Text";

type FormSelectAltProps<E, T> = {
  title: string;
  description: string;
  options: E;
  selected: T;
  onValueChange: (value: T) => void;
};
export const FormSelectAlt = <E extends object, T extends string>(
  props: FormSelectAltProps<E, T>,
) => {
  const { options, selected, onValueChange } = props;

  return (
    <FormItem>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
      <ActionSheetButton
        title={props.description}
        options={options}
        selected={selected}
        onValueChange={onValueChange}
      />
    </FormItem>
  );
};
