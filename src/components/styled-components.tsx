import styled from 'styled-components/native';
import {COLORS, DIMENSIONS} from '../constants';

import {ICustomStyleProp} from '../models/style';

export const Wrapper = styled.View<ICustomStyleProp>``;

export const View = styled.View<ICustomStyleProp>``;
export const TouchableOpacity = styled.TouchableOpacity<ICustomStyleProp>``;

export const Container = styled(Wrapper)<ICustomStyleProp>`
  background-color: ${props => props.theme.body};
  flex: 1;
`;

export const Divider = styled.View<ICustomStyleProp>`
  width: 100%;
  height: 2px;
  border-radius: 4;
  margin-top: 18px;
`;
export const FlexBetweenWrapper = styled.View<ICustomStyleProp>`
  width: 100%;
  justify-content: space-between;
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: row;
`;
export const FlexWrapper = styled.View<ICustomStyleProp>`
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: row;
`;

export const GrowView = styled.View<ICustomStyleProp>`
  flex: 1;
`;

export const RowView = styled.View<ICustomStyleProp>`
  width: 100%;
  flex-direction: row;
`;
export const Space = styled.View<ICustomStyleProp>`
  width: 100%;
  height: ${({height}) => (height || 10) * DIMENSIONS.multiplier}px;
`;

export const CenterView = styled.View<ICustomStyleProp>`
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.ActivityIndicator`
  margin-vertical: 10px;
`;

export const AppText = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.white};
  letter-spacing: 0.135px;
  font-size: ${props => (props.fontSize || 14) * DIMENSIONS.multiplier}px;
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  opacity: ${({opacity}) => opacity || 1};
  text-transform: capitalize;
`;

export const BoldText = styled(AppText)<ICustomStyleProp>`
  font-weight: 700;
`;

export const Title = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.white};
  letter-spacing: 0.135px;
  font-size: ${28 * DIMENSIONS.multiplier}px;
`;

export const ScreenTitle = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || 'white'};
  letter-spacing: 0.135px;
  font-size: ${24 * DIMENSIONS.multiplier}px;
`;

export const H1 = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  letter-spacing: 0.135px;
  font-size: ${24 * DIMENSIONS.multiplier}px;
`;

export const H2 = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  letter-spacing: 0.135px;
  font-size: ${22 * DIMENSIONS.multiplier}px;
`;
export const H3 = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  font-size: ${20 * DIMENSIONS.multiplier}px;
  margin-top: ${props => props.marginTop || 0}px;
  font-weight: 600;
`;
export const H4 = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  font-size: ${18 * DIMENSIONS.multiplier}px;
`;

export const SmallText = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  font-size: ${10 * DIMENSIONS.multiplier}px;
  margin-top: ${props => props.marginTop || 1}px;
`;

export const H5 = styled.Text<ICustomStyleProp>`
  color: ${props => props.color || COLORS.text};
  font-size: ${16 * DIMENSIONS.multiplier}px;
`;
