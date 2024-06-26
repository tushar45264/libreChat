import { useRecoilState } from 'recoil';
import { Switch } from '~/components/ui/Switch';
import useLocalize from '~/hooks/useLocalize';
import store from '~/store';

export default function SendMessageKeyEnter({
  onCheckedChange,
}: {
  onCheckedChange?: (value: boolean) => void;
}) {
  const [enterToSend, setEnterToSend] = useRecoilState<boolean>(store.enterToSend);
  const localize = useLocalize();

  const handleCheckedChange = (value: boolean) => {
    setEnterToSend(value);
    if (onCheckedChange) {
      onCheckedChange(value);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div> {localize('com_nav_enter_to_send')} </div>
      <Switch
        id="enterToSend"
        checked={enterToSend}
        onCheckedChange={handleCheckedChange}
        className="ml-4 mt-2"
        data-testid="enterToSend"
      />
    </div>
  );
}
