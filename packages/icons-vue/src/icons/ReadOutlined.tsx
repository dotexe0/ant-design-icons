// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReadOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReadOutlinedSvg}></AntdIcon>;
};

ReadOutlined.displayName = 'ReadOutlined';
ReadOutlined.inheritAttrs = false;
export default ReadOutlined;