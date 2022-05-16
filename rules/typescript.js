module.exports = {
  rules: {
    // ---------------
    // Supported Rules
    // ---------------

    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': 'off',

    // Disallows awaiting a value that is not a Thenable
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
    '@typescript-eslint/await-thenable': 'error',

    // Bans @ts-<directive> comments from being used or requires descriptions after directive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'error',

    // Bans // tslint:<rule-flag> comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: { object: false },
        extendDefaults: true
      }
    ],

    // Ensures that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforce or disallow the use of the record type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],

    // Consistent with type definition either interface or type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Enforces consistent usage of type exports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md
    '@typescript-eslint/consistent-type-exports': 'off',

    // Enforces consistent usage of type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': 'off',

    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }
    ],

    // Require explicit accessibility modifiers on class properties and methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    // Require explicit return and argument types on exported functions' and classes' public class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require a specific member delimiter style for interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        },
        multilineDetection: 'brackets'
      }
    ],

    // Require a consistent member declaration order
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': 'off',

    // Enforces using a particular method signature syntax
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': 'off',

    // Enforces naming conventions for everything across a codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': 'off',

    // Requires that .toString() is only called on objects which provide useful information when stringified
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow non-null assertion in locations that may be confusing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Requires expressions of type void to appear in statement position
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true
      }
    ],

    // Disallow duplicate enum member values
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.md
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow the delete operator with computed key expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow the declaration of empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 'off',

    // Disallow extra non-null assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'off',

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: false
      }
    ],

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow usage of the implicit any type in catch clauses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    '@typescript-eslint/no-implicit-any-catch': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
        ignoreProperties: false
      }
    ],

    // Disallows usage of void type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false
      }
    ],

    // Disallow the void operator except when used to discard a value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    // Enforce valid definition of new and constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: false
      }
    ],

    // Disallow the use of custom TypeScript modules and namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: false,
        allowDefinitionFiles: true
      }
    ],

    // Disallows using a non-null assertion in the left operand of the nullish coalescing operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the ! postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallow members of unions and intersections that do nothing or override type information
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.md
    '@typescript-eslint/no-redundant-type-constituents': 'off',

    // Disallows invocation of require()
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true
      }
    ],

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
      }
    ],

    // Warns when a namespace qualifier is unnecessary
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Enforces that type arguments will not be used if not required
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallows unnecessary constraints on generic types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallows calling an function with an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    '@typescript-eslint/no-unsafe-argument': 'error',

    // Disallows calling an function with an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // Disallows calling an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    '@typescript-eslint/no-unsafe-call': 'error',

    // Disallows member access on any typed variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // Disallows returning any from a function
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    '@typescript-eslint/no-unsafe-return': 'error',

    // Disallow empty exports that don't change anything in a module file
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-empty-export.md
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 'error',

    // Prefers a non-null assertion over explicit type cast when possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // Require or disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/parameter-properties.md
    '@typescript-eslint/parameter-properties': 'off',

    // Prefer usage of as const over literal type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer initializing each enums member value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    '@typescript-eslint/prefer-enum-initializers': 'off',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': 'off',

    // Use function types instead of interfaces with call signatures
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': 'off',

    // Enforce includes method over indexOf method
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    '@typescript-eslint/prefer-includes': 'error',

    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': 'error',

    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce that this is used when only this type is returned
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
    '@typescript-eslint/prefer-return-this-type': 'off',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Recommends using @ts-expect-error over @ts-ignore
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Requires any function or method that returns a Promise to be marked async
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': 'off',

    // Requires Array#sort calls to always provide a compareFunction
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    '@typescript-eslint/require-array-sort-compare': 'error',

    // When adding two variables, operands must both be of type number or of type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

    // Enforce template literal expressions to be of string type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Enforces that members of a type union/intersection are sorted alphabetically
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Exhaustiveness checking in switch with union type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': 'error',

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],

    // Requires type annotations to exist
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    '@typescript-eslint/typedef': 'off',

    // Enforces unbound methods are called with their expected scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
    '@typescript-eslint/unbound-method': 'error',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': 'off',

    // ---------------
    // Extension Rules
    // ---------------

    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: false }
    ],
    'brace-style': 'off',

    // Require or disallow trailing comma
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'comma-dangle': 'off',

    // Enforces consistent spacing before and after commas
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-spacing': 'off',

    // Enforce default parameters to be last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    // enforce dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false
      }
    ],
    'dot-notation': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'func-call-spacing': 'off',

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['FunctionExpression > Identifier > Decorator', 'PropertyDefinition[decorators] > Identifier'],
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false
      }
    ],
    indent: 'off',

    // require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    '@typescript-eslint/init-declarations': 'off',

    // Enforce consistent spacing before and after keywords
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'keyword-spacing': 'off',

    // Require or disallow an empty line between class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
        exceptAfterOverload: true
      }
    ],
    'lines-between-class-members': 'off',

    // Disallow generic Array constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    // Disallow duplicate class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    // Disallow duplicate imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: false }],
    'no-duplicate-imports': 'off',

    // Disallow empty functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    // Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    '@typescript-eslint/no-extra-semi': 'error',
    'no-extra-semi': 'off',

    // Disallow the use of eval()-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    '@typescript-eslint/no-implied-eval': 'error',
    'no-implied-eval': 'off',

    // Disallow this keywords outside of classes or class-like objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    '@typescript-eslint/no-invalid-this': 'error',
    'no-invalid-this': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',

    // Disallow literal numbers that lose precision
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    '@typescript-eslint/no-loss-of-precision': 'off',

    // Disallow magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow variable redeclaration
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
    'no-redeclare': 'off',

    // Disallow specified modules when loaded by import
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-restricted-imports.md
    '@typescript-eslint/no-restricted-imports': 'off',
    'no-restricted-imports': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',

    // Disallow throwing literals as exceptions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    '@typescript-eslint/no-throw-literal': 'error',
    'no-throw-literal': 'off',

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false
      }
    ],
    'no-unused-expressions': 'off',

    // Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        caughtErrors: 'none'
      }
    ],
    'no-unused-vars': 'off',

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true
      }
    ],
    'no-use-before-define': 'off',

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-constructor': 'off',

    // Enforce consistent spacing inside braces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': 'off',

    // require or disallow padding lines between statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/padding-line-between-statements.md
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: ['interface', 'type'], next: '*' },
      { blankLine: 'any', prev: ['interface', 'type'], next: ['interface', 'type'] }
    ],
    'padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    quotes: 'off',

    // Disallow async functions which have no await expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    '@typescript-eslint/require-await': 'off',

    // Enforces consistent returning of awaited values
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'return-await': 'off',

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    '@typescript-eslint/semi': ['error', 'always'],
    semi: 'off',

    // Enforces consistent spacing before blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-blocks.md
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-blocks': 'off',

    // Enforces consistent spacing before function parenthesis
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-before-function-paren': 'off',

    // This rule is aimed at ensuring there are spaces around infix operators
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    'space-infix-ops': 'off'
  }
};
