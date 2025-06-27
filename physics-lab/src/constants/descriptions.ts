/**
 * Интерфейсы для описаний лабораторной работы
 */
interface DescriptionItem {
    title: string;
    content: string;
}

interface FormulaItem extends DescriptionItem {
    description: string;
}

/**
 * Описания процессов и формул для лабораторной работы
 */
export const LAB_DESCRIPTIONS = {
    title: "Лабораторная работа",
    
    purpose: "Цель работы: ...",
    
    procedure: [
        {
            title: "Подготовка к измерениям",
            content: "1. Ознакомиться с установкой и правилами техники безопасности\n2. Проверить подключение измерительных приборов\n3. Подготовить таблицу для записи результатов измерений"
        },
        {
            title: "Проведение измерений",
            content: "1. Провести измерения и записать результаты в таблицу"
        },
        {
            title: "Обработка результатов",
            content: "1. Обработать полученные данные"
        }
    ] as DescriptionItem[],
    
    formulas: [] as FormulaItem[]
}; 