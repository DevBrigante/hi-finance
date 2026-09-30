import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { router } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { onboardingSteps } from '../model/steps';
import { radius, spacing } from '@/theme/spacing';
import { fontFamily, typography } from '@/theme/typography';
import { useThemeColors } from '@/theme/useThemeColors';

const lastPage = onboardingSteps.length - 1;

export function OnboardingScreen() {
    const { colors } = useThemeColors();
    const insets = useSafeAreaInsets();
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(0);
    const step = onboardingSteps[page];

    const goToSignUp = () => router.push('/sign-up');

    const handleAction = () => {
        if (page === lastPage) {
            goToSignUp();
            return;
        }
        pagerRef.current?.setPage(page + 1);
    };

    return (
        <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.topBar}>
                <View style={styles.counterGroup}>
                    {page > 0 && (
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Voltar"
                            hitSlop={16}
                            onPress={() => pagerRef.current?.setPage(page - 1)}
                        >
                            <Text style={[styles.backGlyph, { color: colors.textSecondary }]}>‹</Text>
                        </Pressable>
                    )}
                    <Text
                        accessibilityLabel={`Passo ${page + 1}} de ${onboardingSteps.length}`}
                        style={[styles.counter, { color: colors.textSecondary }]}
                    >
                        {page + 1} de {onboardingSteps.length}
                    </Text>
                </View>
                <Pressable accessibilityRole="button" hitSlop={14} onPress={goToSignUp}>
                    <Text style={[styles.skip, { color: colors.text }]}>Pular</Text>
                </Pressable>
            </View>
            <PagerView
                ref={pagerRef}
                style={styles.pager}
                initialPage={0}
                onPageSelected={(event) => setPage(event.nativeEvent.position)}
            >
                {onboardingSteps.map((item) => (
                    <View key={item.key} collapsable={false} style={styles.page}>
                        <View
                            aria-hidden
                            style={[styles.illustration, { backgroundColor: colors.surface, borderColor: colors.border}]}
                        />
                        <View style={styles.text}>
                            <Text accessibilityRole="header" style={[typography.h1, { color: colors.text }]}>
                                {item.title}
                            </Text>
                            <Text style={[typography.body, { color: colors.textSecondary }]}>{item.body}</Text>
                            <Text style={[typography.caption, { color: colors.textTertiary }]}>{item.caption}</Text>
                        </View>
                    </View>
                ))}
            </PagerView>
            <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 34) }]}>
                <View aria-hidden style={styles.dots}>
                    {onboardingSteps.map((item, index) => (
                        <View
                            key={item.key}
                            style={[
                                styles.dot,
                                { backgroundColor: index === page ? colors.text : colors.borderStrong },
                                index === page && styles.dotActive,
                            ]}
                        />
                    ))}
                </View>
                <Pressable
                    accessibilityRole="button"
                    onPress={ handleAction}
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: colors.actionPrimary },
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={[styles.buttonLabel, { color: colors.onActionPrimary }]}>{step.action}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )               
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    topBar: {
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.screenPadding,
    },
    counterGroup: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    backGlyph: { fontSize: 24, lineHeight: 24},
    counter: { fontFamily: fontFamily.bold, fontSize: 14 },
    skip: { fontFamily: fontFamily.bold, fontSize: 15 },
    pager: { flex: 1},
    page: { paddingHorizontal: spacing.screenPaddingDense },
    illustration: {
        marginTop: 6,
        height: 330,
        flexShrink: 1,
        borderRadius: radius.card,
        borderWidth: 1,
    },
    text: { marginTop: 18, gap: 10 },
    footer: { gap: 16, paddingHorizontal: spacing.screenPaddingDense },
    dots: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 },
    dot: { width: 9, height: 8, borderRadius: radius.pill },
    dotActive: { width: 24 },
    button: {
        height: 52,
        borderRadius: radius.control,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed: { transform: [{ scale: 0.985 }] },
    buttonLabel: { fontFamily: fontFamily.bold, fontSize: 16 },
});