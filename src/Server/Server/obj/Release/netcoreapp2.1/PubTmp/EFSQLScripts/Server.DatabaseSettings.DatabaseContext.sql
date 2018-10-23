IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    CREATE TABLE [Anchor] (
        [Id] bigint NOT NULL IDENTITY,
        [Mac] nvarchar(max) NULL,
        CONSTRAINT [PK_Anchor] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    CREATE TABLE [Coordinate] (
        [Id] bigint NOT NULL IDENTITY,
        [TagId] nvarchar(max) NULL,
        [XPos] int NOT NULL,
        [YPos] int NOT NULL,
        [Stroke] int NOT NULL,
        CONSTRAINT [PK_Coordinate] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    CREATE TABLE [Measurement] (
        [Id] bigint NOT NULL IDENTITY,
        [AnchorMac] nvarchar(max) NULL,
        [TagMac] nvarchar(max) NULL,
        [Distance] float NOT NULL,
        CONSTRAINT [PK_Measurement] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    CREATE TABLE [Tag] (
        [Id] bigint NOT NULL IDENTITY,
        [Mac] nvarchar(max) NULL,
        CONSTRAINT [PK_Tag] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    CREATE TABLE [TodoItem] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsComplete] bit NOT NULL,
        CONSTRAINT [PK_TodoItem] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20181022091608_AddModels')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20181022091608_AddModels', N'2.1.3-rtm-32065');
END;

GO

