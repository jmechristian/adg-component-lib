import { useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export const CSPCard = ({ hovering }: { hovering: boolean }) => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/csp_card-2.riv',
    stateMachines: 'rootMachine',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
    shouldDisableRiveListeners: true,
  });

  const isHovering = useStateMachineInput(rive, 'rootMachine', 'hoverInput');

  useEffect(() => {
    if (rive && hovering) {
      isHovering!.value = true;
    }
  }, [rive, hovering, isHovering]);

  return (
    <div className='w-[380px] h-[550px]'>
      <RiveComponent
        onMouseEnter={() => (isHovering!.value = true)}
        onMouseLeave={() => (isHovering!.value = false)}
      />
    </div>
  );
};

export default CSPCard;
