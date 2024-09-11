import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export const FPCCard = () => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/fpc_card.riv',
    stateMachines: 'rootMachine',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
    shouldDisableRiveListeners: true,
  });

  const isHovering = useStateMachineInput(rive, 'rootMachine', 'hoverInput');

  return (
    <div className='w-[400px] h-[600px]'>
      <RiveComponent
        onMouseEnter={() => (isHovering!.value = true)}
        onMouseLeave={() => (isHovering!.value = false)}
      />
    </div>
  );
};

export default FPCCard;
