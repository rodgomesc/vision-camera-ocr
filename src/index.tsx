import { NativeModules } from 'react-native';

type VisionCameraOcrType = {
  multiply(a: number, b: number): Promise<number>;
};

const { VisionCameraOcr } = NativeModules;

export default VisionCameraOcr as VisionCameraOcrType;
