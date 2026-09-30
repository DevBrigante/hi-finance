import { Text, View } from 'react-native';
import { useThemeColors } from '@/theme/useThemeColors';
import { typography } from '@/theme/typography';

export default function SignUpRoute() {
    const { colors } = useThemeColors();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
            <Text style={[typography.h2, { color: colors.text }]}>Criar conta</Text>
        </View>
    )
}